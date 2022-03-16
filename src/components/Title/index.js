

const Title = (props) =>{

    return (
        <section className="title-container-head" style={{height: props.height}}>
            <div className="title-content-head">
                <h2 className="title-content-head-h2">Hrnet</h2>
                <p className="title-content-head-texte">{props.subTitle}</p>
            </div>
        </section>
    )
}

export default Title;