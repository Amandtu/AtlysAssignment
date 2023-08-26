export const createFeedPayload = ({ username, comment, emoticon }) => ({
  id: Math.random(),
  imgSrc: "https://picsum.photos/id/60/200/300",
  author: username,
  time: "just now",
  feedContent: comment,
  edited: false,
  emoticon,
});
