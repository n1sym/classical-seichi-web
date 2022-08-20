import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

const today_str = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + (today.getDate() - 1)).slice(-2);

  return `${year}-${month}-${day}`
}

const dynmap_image_url = (type) => {
  return "https://classical-seichi.s3.ap-northeast-1.amazonaws.com/dynmap/" + type + "/" + today_str() + ".jpg"
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>概要</h2>
        <p>整地をするだけの Minecraft マルチサーバーです。</p>
        <p>2000x2000の範囲を岩盤整地することを目指します。</p>
        <p>整地レベルシステム、範囲破壊スキル、液体凝固スキルなど独自機能が存在します。</p>
        <h2>サーバーアドレス</h2>
        <code>seichi.hukurouo.com</code>
        <p>現在、サーバーが起動している時間帯は <b>21時~1時</b> になります。</p>
        <p>ワールドマップは <a href="http://seichi.hukurouo.com:8123/">こちら</a>（地図も上記時間帯にしか見れません）</p>
        <h2>ワールド参加時にやること</h2>
        <p> <code>/stick</code> コマンドを入力して棒を手に入れ、棒を右クリックして独自メニューを開きます。</p>
        <p> メニューから耐久無限ツールが取得できます。あとは整地をするだけです。</p>
        <h2>Discord</h2>
        <p>何かありましたらこちらまで。
        <Link href="https://discord.gg/sJVHcnfMhx">
          <a>https://discord.gg/sJVHcnfMhx</a>
        </Link>
        </p>
        <h2>ページ内リンク</h2>
        <p>
        ・<Link href="/history/map/flat">
          <a>ワールド地図ヒストリー（平面）</a>
        </Link>
        </p>
        <p>
        ・<Link href="/history/map/surface">
          <a>ワールド地図ヒストリー（立体）</a>
        </Link>
        </p>
        <p>{today_str()} 時点のワールド地図</p>
        <p><img src={dynmap_image_url("flat")} /></p>
        <p><img src={dynmap_image_url("surface")} /></p>
      </section>
    </Layout>
  )
}
