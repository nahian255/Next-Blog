
export default function Page({ params }) {
    return (
        <div className=" flex min-h-screen flex-col items-center justify-between p-24">
            My Post: {params.slug}
        </div>
    )
}