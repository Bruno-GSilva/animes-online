import Poster from "./Posters/Poster";

export default function Grid() {
  let animes = [
    {
      name:"one piece",
      url:"https://s2.glbimg.com/sGbnwwxUjsl4EnxubJor5HEDs4E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/A/I/VFtNiyRmC372GBKAAKcw/one-piece.jpg"
    },
    {
      name:"naruto",
      url:"https://img.quizur.com/f/img6410756139e1c1.04385903.jpeg?lastEdited=1678800235"
    },
    {
      name:"bleach",
      url:"https://tm.ibxk.com.br/2023/01/04/04112618980600.jpg"
    },
    {
      name:"attack on titan",
      url:"https://image.api.playstation.com/vulcan/img/rnd/202010/1520/EfaKUXGWULuDpnL0Ai0eujhs.png"
    },
    {
      name:"dragon ball",
      url:"https://tm.ibxk.com.br/2022/03/15/15145623363093.jpg"
    },
    {
      name:"one piece",
      url:"https://criticalhits.com.br/wp-content/uploads/2022/10/one-piece-1-1.jpg"
    },
    {
      name:"boku no hero",
      url:"https://1.bp.blogspot.com/-FTvPM3qV8Zg/XyH2TaN0-aI/AAAAAAAACDU/cNmq51RiNO4VPz0zlm60knZOeg4wNPAcQCLcBGAsYHQ/s1600/Boku-no-Hero-Academia.jpg"
    }
  ]

  return (
    <>
      <div className="border-2 border-red-500 w-screen h-80 grid grid-cols-4 grid-rows-3 p-4 gap-4">
          <Poster img={animes[0].url} h="1"/>
          <Poster img={animes[1].url} h="2"/>
          <Poster img={animes[3].url}/>
          <Poster img={animes[5].url}/>
          <Poster img={animes[2].url}/>
          <Poster img={animes[6].url}/>
          <Poster img={animes[4].url}/>
      </div>
    </>
  )
}
