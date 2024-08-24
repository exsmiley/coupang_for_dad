from openai import OpenAI
api_key = "ASK FOR ME"

client = OpenAI(api_key=api_key)

prompt = '''
You are a data extractor trying to extract the key product that a customer is trying to order from their input statement. They could order more than one product. The data will follow the following syntax. 

input: {input}
output: {output}

Examples:
input: I want to order a pizza.
output: pizza

input: Can you get me a burger and a side of fries? I am really hungry.
output: burger, fries

input: I want tteokbokki.
output: tteokbokki

input: I wanna eat curry.
output: curry

input: I'm craving for fried chicken
output: chicken

input: Can I have Kimchi-jjigae?
output: Kimchi-jjigae

input: I wanna have bulgogi.
output: bulgogi

input: It would be great if I have bibimbap.
output: bibimbap

input: I feel like eating sushi.
output: sushi

input: bossam
output: bossam

input: Can you bring me a salad?
output: salad

input: Do you have a kimchi
output: kimchi

input: pasta sounds good right now.
output: pasta

input: I would be happy if I could have some french fries.
output: french fries

input: Order Galbi for me.
output: Galbi

input: I want something like sandwich.
output: sandwich.

input: I wanna drink water.
output: water

input: May I have a burger with coke?
output: burger, coke

input: I couldn't be happier if I could just eat pork belly.
output: pork belly

input: I will have some chips with beer.
output: chips, beer

input: I feel like having doughnut.
output: doughnut

input: I will go to the market.
output: None

input: I don't want to eat burger.
output: None

input: I don't feel like having gimbap.
output: None

input: I like hotdogs.
output: hotdogs

input: Korean Dak Juk is perfect for this weather.
output: Chicken Porridge

input: I had pizza yesterday, so I want something different today.
output: None

input: I forgot to order beef.
output: beef

input: steak is so good.
output: steak

input: kimchi is too spicy.
output: None

input: I love tomato soup.
output: tomato soup

input: I need to order banana.
output: banana
input: Kimchi ran out.
output: Kimchi

input: 
output: None

input: pizza time
output: pizza

Prompt:
'''

def extract_data(input_str):
    # TODO handle translation.
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": prompt},
            {
                "role": "user",
                "content": "input: " + input_str + "\noutput:"
            }
        ]
    )

    return completion.choices[0].message.content


def extract_change_data(input_str):
    # TODO handle translation.
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": prompt},
            {
                "role": "user",
                "content": "input: " + input_str + "\noutput:"
            }
        ]
    )

    changes = completion.choices[0].message.content.split(",")

    split = [
        c.split(":") for c in changes
    ]
    return [
        s for s in split if len(s) > 1
    ]