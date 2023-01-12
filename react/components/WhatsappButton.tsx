import React from "react";
import PropTypes from "prop-types"


type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}


const whatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const format = message.replace(/ /g, "%20")
    return (
        <>
            <div className="fixed bottom-2 right-2 flex flexColumn">
                <a href={`https://wa.me/${phone}?text=${format}`}
                    target="_blanck"
                    rel="noreferrer noopener"
                >
                     <img src={logo} width={width} height={height} alt="Whatsapp logo" />
                </a>
            </div>
        </>
    )

}

whatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

whatsappButton.defaultProps = {
    logo: "Whatsapp",
    phone: "00000000",
    message: "be happy",
    width: 80,
    height: 80
}


whatsappButton.schema = {
    title: "Whatsapp Button",
    type: "object",
    properties: {
        logo: {
            title: "brand logo",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "phone",
            description: "enter a phone number please ",
            type: "string"

        },
        message: {
            title: "message to display",
            description: "enter a phone number pleaseplease add the message that the client will see ",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        with: {
            "title": "logo-width",
            "type": "number"
        },
        height: {
            "title": "logo-height",
            type: "number"
        }
    }
}
export default whatsappButton;