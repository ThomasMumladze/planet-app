import Button from "./Button";

interface Props {
    content: string;
    activeAcordion: boolean | number;
    handleClick: (acordionNumber: number) => void;
    acordionNumber: number;
    backGroundColo: string;
    border: string;
}
const Accordion = (props: Props) => {
    return (
        <div className="wrapper">
            <Button
                onClick={() => props.handleClick(props.acordionNumber)}
                style={
                    props.activeAcordion === props.acordionNumber
                        ? {
                              background: props.backGroundColo,
                              border: props.border,
                          }
                        : {}
                }
            >
                {props.content}
            </Button>
        </div>
    );
};

export default Accordion;
