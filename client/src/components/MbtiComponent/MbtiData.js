const qnaList = [
  {
    questString: '1. 혼자하는 게임과 여러명이서 하는 게임 중 어떤 것을 선호하시나요?',
    ansList: [
      { answer: 'a. 혼자 집중할 수 있는 싱글플레이 게임', type: [0,3,7,8,9,10,11] },
      { answer: 'b. 친구들이랑 같이 할 수 있는 멀티플레이 게임', type: [1,2,4,6] },
    ]
  },
  {
    questString: '2. 다음 중 좋아하는 게임유형은 무엇인가요? ',
    ansList: [
      { answer: 'a. 모험 게임', type: [3,4] },
      { answer: 'b. 난이도가 어려운 게임', type: [0] },
      { answer: 'c. FPS', type: [1,5] },
    ]
  },
  {
    questString: '3. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 액션 게임 ', type: [3,5,8] },
      { answer: 'b. 체스와 같은 차례형 게임 ', type: [6,10] },
      { answer: 'c. 추리 게임 ', type: [9,11]},
    ]
  },
  {
    questString: '4. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 전략적 책략 게임 유형 ', type: [6] },
      { answer: 'b. 공상 과학 게임 유형 ', type: [7,8] },
      { answer: 'c. 음악 게임 유형 ', type: [8,9] },
    ]
  },
  {
    questString: '5. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 2D 게임', type: [6,8,9,10] },
      { answer: 'b. 3D 게임', type: [0,1,2,3,4,5,7,11]},

    ]
  },
  {
    questString: '6. 픽셀 게임을 좋아하시나요?',
    ansList: [
      { answer: 'a. 좋아합니다 ', type: [8] },
      { answer: 'b. 싫어합니다 ', type: [10] },
      { answer: 'c. 상관없습니다 ', type: [11] },
    ]
  },

  {
    questString: '7. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 도박성 게임 유형', type: [10] },
      { answer: 'b. 역사적 사실이 들어간 게임 유형', type: [6] },
      { answer: 'c. 줄거리가 풍성한 게임 유형', type: [9,11] },
    ]
  },
  {
    questString: '8. 오픈월드 게임을 좋아하시나요?',
    ansList: [
      { answer: 'a. 좋아합니다', type: [0,2,3,7] },
      { answer: 'b. 싫어합니다', type: [6] },

    ]
  },
  {
    questString: '9. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 그리스 로마 신화 같은 신화 게임 유형', type: [10] },
      { answer: 'b. 매니지먼트 게임', type: [6] },
      { answer: 'c. 추리 어드벤쳐 게임', type: [9,11] },
    ]
  },
  {
    questString: '10. 다음 중 좋아하는 게임유형은 무엇인가요?',
    ansList: [
      { answer: 'a. 빠른 리듬 게임', type: [8] },
      { answer: 'b. 공포 게임', type: [11] },
      { answer: 'c. 애니메이션 게임', type: [9,11] },
    ]
  },
  {
    questString: '11. 고난이도 게임을 좋아하시나요?',
    ansList: [
      { answer: 'a. 좋아합니다', type: [0,8] },
      { answer: 'b. 싫어합니다', type: [1,2,3,4,5,7,9,10,11] },
    ]
  },
  {
    questString: '12. 시간이 오래 걸리는 게임을 좋아하시나요?',
    ansList: [
      { answer: 'a. 좋아합니다', type: [0,1,5,7] },
      { answer: 'b. 싫어합니다', type: [2,3,4,9,10,11] },
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