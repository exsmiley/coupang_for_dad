# import requests

# url = "https://api.bland.ai/v1/inbound/14156501485"

# payload = {
#     # "prompt": "<string>",
#     "pathway_id": "7a30a83d-12ef-419a-bc69-d983dd847eff",
#     "voice": "Alexa",
#     # "first_sentence": "<string>",
#     "wait_for_greeting": False,
#     "interruption_threshold": 65,
#     # "model": "<string>",
#     # "tools": [{}],
#     "language": "ko-KR",
#     # "timezone": "<string>",
#     # "transfer_phone_number": "<string>",
#     # "transfer_list": {},
#     # "dynamic_data": {},
#     # "keywords": ["<string>"],
#     "max_duration": 60*5,
#     # "webhook": "<string>",
#     # "analysis_schema": {},
#     # "metadata": {},
#     # "summary_prompt": "<string>",
#     # "analysis_prompt": "<string>",
#     "record": False
# }
# headers = {
#     "authorization": "sk-563bjxr4ux3qp5y9iv8819fp0dyegzwuha6cm6pr3n02o17kxabznutg7liowv1069",
#     "Content-Type": "application/json"
# }

# response = requests.request("POST", url, json=payload, headers=headers)

# print(response.text)

from prompt import extract_change_data

print(extract_change_data("I don't want any cookies"))