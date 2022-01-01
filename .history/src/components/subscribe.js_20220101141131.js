///サブスクの設定はここでしてね
export const Netflix = {
  subscription_name: "Netflix",
  subscription_price: "990",
  subscription_url: "https://www.netflix.com/browse",
  subscription_picture: "t22189.jpg"
}

export const AmazonPrime ={
  subscription_name: "AmazonPrime",
  subscription_price: "550",
  subscription_url: "https://www.amazon.co.jp/ref=nav_logo",
  subscription_picture: "t22189.jpg"
}

const [subscName, setSubscName]=useState("")
const [subscPrice, setSubscPrice]=useState({})
const [subscURL, setSubscURL]=useState("")
const [subscPicture, setSubscPicture]=useState("")

const onChangeStateNetflix = () =>{
  setSubscName("Netflix")
  setSubscPrice(990)
  setSubscURL("https://www.netflix.com/browse")
  setSubscPicture("t22189.jpg")
}
const addSubsc =()=>{}
// const AmazonPrime ={
//   subscription_name: "AmazonPrime",
//   subscription_price: 550,
//   subscription_url: "https://www.amazon.co.jp/ref=nav_logo",
//   subscription_picture: "t22189.jpg"
// }
