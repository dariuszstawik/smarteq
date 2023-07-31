import React from 'react'
import NewsCard from './news-card';

const NewsSection = () => {
return (
<div className="flex justify-center">
<section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<NewsCard/>
<NewsCard/>
<NewsCard/>
</section>
</div>
)}

export default NewsSection;