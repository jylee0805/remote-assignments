const { useEffect, useState } = React;
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const App = () => {
  const [pages, setPages] = useState(1);
  const [items, setItems] = useState([]);

  const queryData = (page) => {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setItems((prevItems) => [...prevItems, ...data]);
      })
      .catch((error) => console.log(error));
    setPages((prevPages) => {
      return prevPages + 1;
    });
  };

  useEffect(() => {
<<<<<<< HEAD
    queryData(1);
=======
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.log(error));
    setPages((prevPages) => {
      return prevPages + 1;
    });
>>>>>>> 25943b90 (assignment4 opt finish)
  }, []);

  return (
    <div className="wrap">
      <main>
        <ul className="card">
          {items.map((item) => (
            <CardItem id={item.id} key={item.id} title={item.name} visibility={item.visibility} description={item.description} topics={item.topics} />
          ))}
        </ul>
        <button onClick={() => queryData(pages)}>more</button>
      </main>
    </div>
  );
};

const CardItem = ({ title, visibility, description, topics }) => {
  return (
    <li className="card_item">
      <h3 className="card_title">{title}</h3>
      <span className="card_visible">{visibility}</span>
      <p className="card_description">{description}</p>
      {topics && (
        <ul className="topic">
          {" "}
          {topics.map((topic) => (
            <TopicItem topic={topic} key={topics.indexOf(topic)} />
          ))}{" "}
        </ul>
      )}
    </li>
  );
};

const TopicItem = ({ topic }) => {
  return <li className="topic_item">{topic}</li>;
};
root.render(<App />);
