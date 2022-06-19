import { AdCard, Banner, BannerTag, Grid, Hero, Layout } from "../components"

export default function DiscountPage() {
  return (
    <Layout>
      <Banner>
        <h2>hej</h2>
      </Banner>

      <div className="m-auto w-full md:w-[80%]">
        <h2 className="text-3xl py-4">Rabatter</h2>
        <Grid>
          {[0, 1, 2, 3, 4].map(() => {
            return <AdCard />
          })}
        </Grid>
      </div>
    </Layout>
  )
}
