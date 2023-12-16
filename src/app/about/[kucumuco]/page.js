
const dynamicPage = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>dynamic{params.id}</h1>
        </div>
    );
};

export default dynamicPage;