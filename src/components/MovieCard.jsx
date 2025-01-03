import { Card, Rate } from "antd";
import { Link } from "react-router";
const { Meta } = Card;

const MovieCard = (props) => {
  return (
    <>
      <Link to={`/${props.id}`}>
        <Card
          hoverable
          cover={
            <img
              src={props.posterURL}
              alt="example"
              className="w-[500px] h-[350px] object-cover"
            />
          }
        >
          <Meta
            title={props.title.toUpperCase()}
            description={
              <div className="grid gap-2">
                <h2 className="border-t-2 pt-2 text-left">
                  <span className="font-bold">Description :</span>{" "}
                  {props.description}
                </h2>
                <div className="flex gap-2 items-center">
                  <span className="font-bold">Rating :</span>
                  <Rate allowHalf value={props.rating} />
                </div>
              </div>
            }
          />
        </Card>
      </Link>
    </>
  );
};
export default MovieCard;
