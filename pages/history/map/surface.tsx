import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'

const today_str = (date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + (date.getDate() - 1)).slice(-2);

  return `${year}-${month}-${day}`
}

const display_dates = () => {
  const dates = ["2022-08-09","2022-08-10"];
  const start_date = new Date("2022-08-16")
  const end_today = new Date();
  for(let d = start_date; d < end_today; d.setDate(d.getDate()+1)) {
    dates.push(today_str(d));
  }
  return dates;
}

const dynmap_flat_image_url = (date) => {
  return "https://classical-seichi.s3.ap-northeast-1.amazonaws.com/dynmap/surface/" + date + ".jpg"
}

export default function MapHistory() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div id="flex-container">
        {display_dates().map((date) => (
          <div className="raw-item">
            {date}
            <img src={dynmap_flat_image_url(date)} width={400}/>
          </div>
        ))}
        </div>
      </section>
    </Layout>
  )
}