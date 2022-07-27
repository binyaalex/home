import './Review.css'

import star from "../../../assets/images/icons/star-icon-green.png";

const Review = ({writerName, date, rating, text, img }) => {
    return (
        <div className="service_box rating_box">
            <div className="box_con review_box">
                <div className="box_heading d-flex align-center justify-between">
                    <h4>{writerName}</h4>
                    <span>{date}</span>
                </div>
                    <span className="star">
                        <img src={star} alt="" /> {rating}
                    </span>
                <div className="price d-flex align-center justify-between">
                    <p>{text}</p>
                </div>
            </div>
            <div className="box_round_img">
                <img src={img} alt="Online" />
            </div>
        </div>
    )
}

export default Review