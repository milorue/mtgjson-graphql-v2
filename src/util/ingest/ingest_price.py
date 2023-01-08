#!/usr/bin/env python3

import argparse
import json
import lzma
import pathlib
import tempfile
from collections import defaultdict

import requests


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-d", "--date", type=str, required=True, help="Date to get for all prices"
    )
    parser.add_argument(
        "-o",
        "--output",
        type=str,
        required=True,
        help="Location to save trimmed all prices",
    )
    args = parser.parse_args()
    print(args)

    local_final_save_path = pathlib.Path(args.output).expanduser().resolve()

    file_url = "https://mtgjson.com/api/v5/AllPrices.json.xz"
    response = requests.get(file_url, stream=True)
    if response.ok:
        temp_file = tempfile.NamedTemporaryFile(delete=False)

        with open(temp_file.name, "wb") as tf:
            for chunk in response.iter_content(chunk_size=1024):
                if chunk:
                    tf.write(chunk)

        with lzma.open(temp_file.name, mode="rt", encoding="utf-8") as file:
            data = json.loads(file.read())["data"]

        temp_file.close()

    print(f"{response.url} saved successfully")
    nested_dict = lambda: defaultdict(nested_dict)
    small_data = nested_dict()

    for card_uuid, card in data.items():
        for card_format, card_format_obj in card.items():
            for card_provider, provider in card_format_obj.items():
                for card_buy_sell_option, buy_sell_option in provider.items():
                    if card_buy_sell_option not in ["buylist", "retail"]:
                        continue

                    for card_finish, price_date_map in buy_sell_option.items():
                        if args.date in price_date_map:
                            small_data[card_uuid][card_format][card_provider][
                                card_buy_sell_option
                            ][card_finish] = {
                                args.date: data[card_uuid][card_format][card_provider][
                                    card_buy_sell_option
                                ][card_finish][args.date]
                            }

    with local_final_save_path.open("w") as file:
        json.dump(small_data, file, indent=4, sort_keys=True)
    print("Dumped to file successfully")

if __name__ == "__main__":
    main()
