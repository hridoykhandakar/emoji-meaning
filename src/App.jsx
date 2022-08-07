import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Entry from "./components/Entry";
import emojiPedia from "./data/emojiPedia";

// const createCard = (contact) => {
//   return (
//     <Entry
//       key={contact.id}
//       emoji={contact.emoji}
//       name={contact.name}
//       meaning={contact.meaning}
//     />
//   );
// };
const newEmojiPedia = emojiPedia.map((item) => item.meaning.substring(0, 100));
// emojiPedia.map((item) => newEmojiPedia.push(item.meaning.substring(0, 100)));
// console.log(newEmojiPedia);
function App() {
  return (
    <div>
      <Header />
      <div className="main">
        {emojiPedia.map((item) => (
          <Entry
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
