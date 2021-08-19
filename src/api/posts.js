// n초 뒤에 실행 되게하는 promise
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  {
    id: 1,
    title: '김소현은 너무 예쁘다',
    body: '김소현 너무 예뻐~'
  },
  {
    id: 2,
    title: '갤럭시 북 사서 너무 좋다!',
    body: '노트북 너무 빨라서 좋아~'
  },
  {
    id: 3,
    title: '짐승 친구들 재밌다!',
    body: '재밌슘당~'
  },
]

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostsById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
}