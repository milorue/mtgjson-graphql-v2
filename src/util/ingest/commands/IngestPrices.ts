import { connectDatabase } from '../../ConnectDatabase'
import MTGLog from '../../Logger'
import { getPrices } from '../APIOperators'
import { CardEntity } from '../../../entities/Card.entity'
import { isString } from 'class-validator'
import { CardPriceEntity } from '../../../entities/CardPrice.entity'

const ingestPrices = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestPrices command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const allPrices = await getPrices()
        const cardsWithUUID: CardEntity[] = await CardEntity.find()

        let priceFormat;
        let priceProvider;
        let priceCardType;
        let priceLists;
        let priceCurrency;
        let priceDate;

        cardsWithUUID.map(async (cardEntity: CardEntity, index) => {
            try{
                if(index === cardsWithUUID.length/2){
                    return
                }
                priceFormat = allPrices.data[cardEntity.uuid]
                // we can get the format here
                for(let i in priceFormat){
                    if(i === "paper"){
                        priceProvider = priceFormat[i]
                        // we get the provider here
                        for(let j in priceProvider){
                            priceLists = priceProvider[j]
                            // we get buylist, currency, retail here
                            priceCurrency = priceLists.currency
                            for(let k in priceLists){
                                if(k === "buylist"){
                                    priceCardType = priceLists[k]
                                    // we get card type (foil & normal) here
                                    for(let l in priceCardType){
                                        priceDate = priceCardType[l]
                                        // we get price date here
                                        for(let m in priceDate){
                                            let card = new CardPriceEntity()
                                            card.uuid = cardEntity.uuid
                                            card.format = i
                                            card.provider = j
                                            card.listType = k
                                            card.currency = priceCurrency
                                            card.date = m
                                            card.price = parseFloat(priceDate[m])
                                            card.cardType = l
                                            await card.save()
                                        }
                                    }
                                }
                                if(k === "retail"){
                                    priceCardType = priceLists[k]
                                    // we get card type (foil & normal) here
                                    for(let l in priceCardType){
                                        priceDate = priceCardType[l]
                                        // we get price date here
                                        for(let m in priceDate){
                                            let card = new CardPriceEntity()
                                            card.uuid = cardEntity.uuid
                                            card.format = i
                                            card.provider = j
                                            card.listType = k
                                            card.currency = priceCurrency
                                            card.date = m
                                            card.price = parseFloat(priceDate[m])
                                            card.cardType = l
                                            await card.save()
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // if(i === "mtgo"){
                    //     priceProvider = priceFormat[i]
                    //     // we get the provider here
                    //     for(let j in priceProvider){
                    //         priceLists = priceProvider[j]
                    //         // we get buylist, currency, retail here
                    //         priceCurrency = priceLists.currency
                    //         for(let k in priceLists){
                    //             if(k === "buylist"){
                    //                 priceCardType = priceLists[k]
                    //                 // we get card type (foil & normal) here
                    //                 for(let l in priceCardType){
                    //                     priceDate = priceCardType[l]
                    //                     // we get price date here
                    //                     for(let m in priceDate){
                    //                         let card = new CardPriceEntity()
                    //                         card.uuid = cardEntity.uuid
                    //                         card.format = i
                    //                         card.provider = j
                    //                         card.listType = k
                    //                         card.currency = priceCurrency
                    //                         card.date = m
                    //                         card.price = parseFloat(priceDate[m])
                    //                         card.cardType = l
                    //                         await card.save()
                    //                     }
                    //                 }
                    //             }
                    //             if(k === "retail"){
                    //                 priceCardType = priceLists[k]
                    //                 // we get card type (foil & normal) here
                    //                 for(let l in priceCardType){
                    //                     priceDate = priceCardType[l]
                    //                     // we get price date here
                    //                     for(let m in priceDate){
                    //                         let card = new CardPriceEntity()
                    //                         card.uuid = cardEntity.uuid
                    //                         card.format = i
                    //                         card.provider = j
                    //                         card.listType = k
                    //                         card.currency = priceCurrency
                    //                         card.date = m
                    //                         card.price = parseFloat(priceDate[m])
                    //                         card.cardType = l
                    //                         await card.save()
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }   
                }
            }
            catch(err){
                MTGLog.error(`Ingestion error: ${err}`)
            }
            
        })

        MTGLog.info(`Finished up ingesting prices`)
    }
    catch(err){
        MTGLog.error(err)
    }
    finally{
        MTGLog.info(`Program exit`)
        return
    }
}

ingestPrices()

export default ingestPrices