import requests
import os

# 네이버 번역 API 키 설정
NAVER_CLIENT_ID = os.getenv('NAVER_CLIENT_ID', 'cnuhim4qhz')
NAVER_CLIENT_SECRET = os.getenv('NAVER_CLIENT_SECRET', 'I2uEGUf0DkYnQWUqzhd2dY2hTuDx4oeEbxQbIoj8')

def translate_data(input_text):
    # 네이버 번역 API를 사용하여 입력 데이터를 한국어로 번역
    url = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation'
    headers = {
        'X-NCP-APIGW-API-KEY-ID': NAVER_CLIENT_ID,
        'X-NCP-APIGW-API-KEY': NAVER_CLIENT_SECRET,
        'Content-Type': 'application/json'
    }
    body = {
        'source': 'ko',  # 한국어 원문('ko')
        'target': 'en',  # 영어 번역('en')
        'text': input_text
    }
    response = requests.post(url, headers=headers, json=body)
    
    # API 응답 확인
    result = response.json()
    # print(f"API response: {result}")  # API 응답 출력
    
    # 번역된 텍스트 추출
    translated_text = result.get('message', {}).get('result', {}).get('translatedText', '')
    
    return translated_text

def main():
    input_text = '피자 먹을래'  # 테스트할 입력 텍스트
    translated_data = translate_data(input_text)
    
    # 번역된 데이터 출력
    print(f"Translated data: {translated_data}")

if __name__ == '__main__':
    main()