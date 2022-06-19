import { AdCard, Banner, Grid, HorizontalScroll, Layout } from "../components"

export default function DiscountPage() {
  return (
    <Layout>
      <Banner>
        <h2>hej</h2>
      </Banner>
      <div className="m-auto w-full md:w-[80%]">
        <h2 className="text-3xl py-4">Rabatter</h2>
        <h3 className="text-2xl">Horizontal list</h3>
        <div className="py-8">
          <HorizontalScroll>
            {[0, 1, 2, 3, 4].map(() => {
              return <AdCard hideButton />
            })}
          </HorizontalScroll>
        </div>
        <Grid>
          {[0, 1, 2, 3, 4].map(() => {
            return <AdCard />
          })}
        </Grid>
      </div>
    </Layout>
  )
}
