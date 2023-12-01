import './ExpandedArticle.css';
import { React, useState } from "react"
import { articles } from '../../articles';
import { useParams } from 'react-router-dom';
import PostMini from '../../Elements/PostMini';

function ExpandedArticle() {

  const { id } = useParams();
  const data = articles.filter(function (art) {
    return art.id == id;
  })[0];

  const [shownArticles, setShownArticles] = useState(2);
  const relatedArticles = articles.filter(function (art) {
    return art.id != id;
  })

  return (
    <div className='expanded_article_screen'>
      <div className='expanded_article'>
        <div className='expanded_article_title'>
          <h1>{data.title}</h1>
          <button className='three_dots'></button>
        </div>
        <div className='expanded_article_author'>
          <h1>{data.author}<p> | {data.date}</p></h1>
          <ul className='expanded_article_tags'>
            {data.tags.slice(0, 5).map((tag, i) => (
              <li key={i}>
                <button className='expanded_tag'>{tag}</button>
              </li>
            ))}
            {(data.tags.length > 5) ? <li>+ {data.tags.length - 5} more</li> : <li></li>}
          </ul>
        </div>
        <div className='line'></div>
        {data.description.split('\n').map((str, i) => <p key={i} className='expanded_article_description'>{str}</p>)}
        {data.images.length > 0 ? data.images.map((url, i) => (
          <img key={i} className='expanded_article_image' src={url}></img>)) : null}
      </div>
      <div className='related_articles'>
        <p className="home_element_titles">Related articles</p>
        <div className='line'></div>
        {relatedArticles.slice(0, shownArticles).map(article => (
          <PostMini key={article.id} data={article} />
        ))}
        {(shownArticles >= relatedArticles.length) ?
          <p className="load_end">Reached the End</p> :
          <a href="#/" className="load_more" onClick={() => setShownArticles(shownArticles + 2)}>Load More</a>}
      </div>
    </div>
    // <div className='expanded_article_screen'>
    //   <div className="expanded_article">
    //     <div className='article-overlay'>
    //       <div className='title-overlay'>
    //         <h1 className='title-text'>Viewership for CS2's first tier-one event wasn't spectacular, but there was plenty to blame</h1>
    //         <button className='options-button' />
    //       </div>
    //       <div className="info-overlay">
    //         <h1 classname='author-date-text'>Carlito Smith | Oct 23, 2023</h1>
    //         <div className="tags">
    //           <div className="tag">
    //             <h1 className='tag-name'>Counter-Strike 2</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <hr className='line-space'></hr>
    //       <p className='article-text'>The recent debut of CS2's first tier-one esports event had gamers and esports enthusiasts around the world on the edge of their gaming chairs. Expectations were sky-high, but when the viewer numbers came in, it left many of us scratching our heads. So, what's the story behind the not-so-spectacular viewership?</p>
    //       <img src={articleimage1} className='article-image'></img>
    //       <p className='article-text'>High Hopes for CS2's Competitive Scene<br></br>
    //         The announcement of CS2 sent shockwaves through the gaming community. It promised a unique gaming experience with its impressive visuals and captivating gameplay, making many of us eager to dive into its competitive world. The inaugural tier-one event was meant to be the grand unveiling, setting the stage for the future of CS2's esports scene.
    //         <br></br> <br></br>
    //         Where Did the Viewers Go?
    //         But when the event rolled out, the numbers didn't quite stack up. Several factors likely played a role in the less-than-stellar viewership.
    //         <br></br> <br></br>
    //         1. New Kid on the Block: CS2 is a brand new game, and building a dedicated fanbase takes time. It's hard to compete with established giants like CS:GO right out of the gate.
    //         <br></br> <br></br>
    //         2. The Marketing Mystery: Effective marketing is crucial for attracting eyeballs. It's possible that CS2's marketing efforts didn't quite hit the mark.
    //         <br></br> <br></br>
    //         3. Tough Competition: The esports arena is a battlefield. CS2 had to vie for attention with heavyweights like League of Legends, Dota 2, and CS:GO. It's a tough crowd out there.</p>
    //     </div>
    //     <div className='x-suggestion-overlay'>
    //       <h1 className='related-articles'>Related News Articles</h1>
    //       <hr className='sug-line-space'></hr>
    //       <div className='sug-article'>
    //         <h1 className='sug-article-title'><u>Saudi Prime Minister unveils</u></h1>
    //         <p className='sug-article-text'>Saudi Arabia is climbing up the ranks in the esports and games industry, making huge investments and hosting events that are...</p>
    //         <img src={articleimage2} className='sug-article-image'></img>
    //         <div className='sug-tags'>
    //           <div className='tag'>
    //             <h1 className='tag-name'>E-Sports Events</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <hr className='sug-line-space'></hr>
    //       <div className='sug-article'>
    //         <h1 className='sug-article-title'><u>Esports 2023: A Look at the Latest and Greatest Events on the Horizon</u></h1>
    //         <p className='sug-article-text'>The esports world is constantly evolving, and 2023 promises to be a thrilling year for gamers and enthusiasts. As we gear up for a slew...</p>
    //         <img src={articleimage3} className='sug-article-image'></img>
    //         <div className='sug-tags'>
    //           <div className='tag'>
    //             <h1 className='tag-name'>E-Sports</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <hr className='sug-line-space'></hr>
    //       <h1 className='load-more-btn'><u>Load More</u></h1>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ExpandedArticle;