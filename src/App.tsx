import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [newWord, setNewWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleCheckIfPalindrome = (event: FormEvent) => {
    event.preventDefault();    
    const wordSplited = newWord.toLowerCase().split('');
    let wordIsPalindrome = true;
    while (wordSplited.length > 0 ) {
      if (wordSplited.length === 1) break;
      const firstChar = wordSplited.shift();
      const lastChar = wordSplited.pop();    
      if (firstChar !== lastChar) {
        wordIsPalindrome = false;
        break;
      }    
    }
    setSelectedWord(newWord);
    setNewWord('');
    if (wordIsPalindrome) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  }

  const handleNewWordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewWord(event.target.value)
    setIsPalindrome(false);
    if (selectedWord.length > 0) setSelectedWord('');
  }

  return (
    <section className="container">
      <div className="heading">
        <h1 className="heading__title">Palindrome</h1>
      </div>
      <form onSubmit={handleCheckIfPalindrome} className="form">
        <div>
          <label className="form__label" htmlFor="todo">Enter a word and submit to check if is a palindrome</label>
          <input className="form__input"
            type="text"
            size={30}
            autoComplete="off"
            value={newWord}
            onChange={handleNewWordChange}
            required
          />
          <button className="button"><span>Submit</span></button>
        </div>
      </form>      
      <div>
        {isPalindrome  && (
          <p className='h3__is-palindrome'>Word <strong><i>{selectedWord}</i></strong> ... <br/> <span>is a palindrome</span></p>
        )}
        {!isPalindrome && selectedWord.length > 0 && (
          <p className='h3__is-not-palindrome'>Word <strong><i>{selectedWord}</i></strong> ... <br/> <span>is not a palindrome</span></p>
        )}
      </div>
    </section>
  )
}

export default App
