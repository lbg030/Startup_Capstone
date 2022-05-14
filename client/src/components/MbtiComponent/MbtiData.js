const qnaList = [
  {
    questString: '1. 심심해서 게임이 하고 싶어진 당신! 어떤 게임을 하는게 좋을까?',
    ansList: [
      { answer: 'a. 혼자 집중할 수 있는 싱글플레이 게임', type: [0,3,7,8,9,10,11] },
      { answer: 'b. 친구들이랑 같이 할 수 있는 멀티플레이 게임', type: [1,2,4,6] },
    ]
  },
  {
    questString: '2. 다음 중 좋아하는 게임유형은? ',
    ansList: [
      { answer: 'a. 모험', type: [3,4] },
      { answer: 'b. 어려움', type: [0] },
      { answer: 'c. FPS', type: [1,5] },
    ]
  },
  {
    questString: '3. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. 동작', type: [3,5,8] },
      { answer: 'b. 횟수', type: [6,10] },
      { answer: 'c. 추리', type: [9,11]},
    ]
  },
  {
    questString: '4. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. 책략 ', type: [6] },
      { answer: 'b. 사이보 펑크" ', type: [7,8] },
      { answer: 'c. 음악 호평" ', type: [8,9] },
    ]
  },
  {
    questString: '5. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. 2D 게임', type: [6,8,9,10] },
      { answer: 'b. 3D 게임', type: [0,1,2,3,4,5,7,11]},

    ]
  },
  {
    questString: '6. 픽셀 화풍 좋아해요?',
    ansList: [
      { answer: 'a. 좋아해요', type: [8] },
      { answer: 'b. 싫어요', type: [10] },
      { answer: 'c. 별생각 없어요', type: [11] },
    ]
  },

  {
    questString: '7. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. roguelike', type: [10] },
      { answer: 'b. 역사', type: [6] },
      { answer: 'c. 줄거리가 풍성', type: [9,11] },
    ]
  },
  {
    questString: '8. 오픈월드 좋아해요?',
    ansList: [
      { answer: 'a. 좋아해요', type: [0,2,3,7] },
      { answer: 'b. 싫어요', type: [6] },

    ]
  },
  {
    questString: '9. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. 신화', type: [10] },
      { answer: 'b. 관리', type: [6] },
      { answer: 'c. 시각 소설', type: [9,11] },
    ]
  },
  {
    questString: '10. 다음 중 좋아하는 게임유형은?',
    ansList: [
      { answer: 'a. 빠른 리듬', type: [8] },
      { answer: 'b. 심리적 공포', type: [11] },
      { answer: 'c. 애니메이션', type: [9,11] },
    ]
  },
  {
    questString: '11. 고난도 게임 좋아해요?',
    ansList: [
      { answer: 'a. 좋아해요', type: [0,8] },
      { answer: 'b. 싫어요', type: [1,2,3,4,5,7,9,10,11] },
    ]
  },
  {
    questString: '12. 시간이 오래 걸리는 게임을 좋아해요?',
    ansList: [
      { answer: 'a. 좋아해요', type: [0,1,5,7] },
      { answer: 'b. 싫어요', type: [2,3,4,9,10,11] },
    ]
  },

]

const infoList = [
  {
    name: 'Elden Ring',
    desc: ''
  },
  {
    name: 'CSGO',
    desc: ''
  },
  {
    name: 'GTA5',
    desc: ''
  },
  {
    name: 'Red dead redemption 2',
    desc: ''
  },
  {
    name: 'It takes two',
    desc: ''
  },
  {
    name: 'Borderlands 3',
    desc: ''
  },
  {
    name: 'Civilization VI',
    desc: ''
  },
  {
    name: 'Cyberpunk2077',
    desc: ''
  },
  {
    name: 'Katana Zero',
    desc: ''
  },
  {
    name: 'Phoenix Wright: Ace Attorney Trilogy',
    desc: ''
  },
  {
    name: 'Slay the Spire',
    desc: ''
  },
  {
    name: 'Danganronpa',
    desc: ''
  },
]
export {qnaList, infoList};