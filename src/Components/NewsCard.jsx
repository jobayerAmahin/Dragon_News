import React from 'react';

const NewsCard = ({newsDetail}) => {
    const {
        title,
        total_view,
        image_url,
        rating,
        others_info,
        thumbnail_url
      }= newsDetail
        return (
          <div className="news-card">
            <div className="news-card-thumbnail">
              <img src={thumbnail_url} alt="Thumbnail" className="thumbnail-image" />
            </div>
            <div className="news-card-content">
              <h2 className="news-title">{title}</h2>
              <img src={image_url} alt="News" className="news-image" />
              <div className="news-meta">
                <span className="views">Views: {total_view}</span>
                
              </div>
              
            </div>
          </div>
        );
};

export default NewsCard;