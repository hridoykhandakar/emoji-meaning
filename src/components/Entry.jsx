function Entry(props) {
  // console.log(props);
  return (
    <>
      <div className="dictionary">
        <div className="term">
          <dt>
            <div className="emoji">
              <span className="e-img" role="img" aria-level="Tense Biceps">
                {props.emoji}
              </span>
            </div>
            <span>{props.name}</span>
          </dt>
          <dd>{props.meaning}</dd>
        </div>
      </div>
    </>
  );
}

export default Entry;
