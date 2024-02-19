import { RoughNotation } from "react-rough-notation"

const Annotate = ( props ) => {

    return (
        <div className="w-fit">
            <RoughNotation type="highlight" show={ true } color={"rgba(255, 199, 38, 0.44)"}>
                { props.children }
            </RoughNotation>
        </div>
    )

}

export default Annotate
