function Home(props){
    return (
        <>
            <main>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal">FMRepEx</h1>
                        <p className="lead fw-normal">Facility Management Reporting Express</p>

                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </main>
        </>
    );
}

const divStyle = {
    width: '80%',
    height: '300px',
    borderRadius: '21px 21px 0 0'
};
export default Home;