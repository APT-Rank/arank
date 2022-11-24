  function sendTo() {
    Kakao.Auth.login({
      scope: 'TALK_MESSAGE',
      success: function() {
        Kakao.API.request({
          url: '/v2/api/talk/memo/default/send',
          data: {
            template_object: {
              object_type: 'feed',
              content: {
                title: '아파트랭크 9월 업데이트 안내',
                image_url:
                  'https://www.aptrank.kr/update_202209.jpg',
                link: {
                  mobile_web_url: 'https://www.aptrank.kr',
                  web_url: 'https://www.aptrank.kr',
                },
              },
              social:{

              },
              buttons: [
                {
                  title: '아파트랭크',
                  link: {
                    mobile_web_url: 'https://www.aptrank.kr',
                    web_url: 'https://www.aptrank.kr',
                  },
                },
                {
                  title: '랭크:THEME',
                  link: {
                    mobile_web_url: 'https://www.aptrank.kr/theme',
                    web_url: 'https://www.aptrank.kr/theme',
                  },
                },
              ],
            },
          },
          success: function(res) {
            alert('success: ' + JSON.stringify(res))
          },
          fail: function(err) {
            alert('error: ' + JSON.stringify(err))
          },
        })
      },
      fail: function(err) {
        alert('failed to login: ' + JSON.stringify(err))
      },
    })
  }
