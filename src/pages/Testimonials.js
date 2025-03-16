import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme';
// Import review images
import review1 from '../assets/review-1.jpg';
import review2 from '../assets/review-2.png';
import review3 from '../assets/review-3.png';
import review4 from '../assets/review-4.png';
import review5 from '../assets/review-5.png';

const Testimonials = () => {
    const { mode } = useTheme();
    const [selectedReview, setSelectedReview] = useState(null);
    
    const reviews = [
        { id: 1, image: review1, name: 'Leye A.', role: 'CEO, CTA Fintech Solutions' },
        { id: 2, image: review3, name: 'Gabi O.', role: 'Client' },
        { id: 3, image: review4, name: 'Client 3', role: 'Position' },
        { id: 4, image: review2, name: 'Client 4', role: 'Position' },
        { id: 5, image: review5, name: 'Client 5', role: 'Position' },
    ];

    // Handle clicking on a review to expand it
    const handleReviewClick = (id) => {
        setSelectedReview(selectedReview === id ? null : id);
    };

    return (
        <div id='testimonials' className={`min-h-full pt-5 lg:py-10 ${mode}`}>
            <div className='px-5 lg:px-10'>
                <h3 className='text-sm font-body opacity-50 tracking-widest'>WALL OF REVIEWS</h3>
                <h2 className='mt-5 font-body hidden tracking-widest text-2xl font-bold'>What clients are saying</h2>
            </div>
            
            {/* Masonry-style review wall */}
            <div className='px-5 lg:px-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {reviews.map((review) => (
                    <div 
                        key={review.id}
                        className={`review-card transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-2 ${selectedReview === review.id ? 'col-span-full md:col-span-2 md:row-span-2' : ''}`}
                        onClick={() => handleReviewClick(review.id)}
                    >
                        <div className='relative group'>
                            <img 
                                src={review.image} 
                                alt={`Review from ${review.name}`} 
                                className='w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-300 rounded-md'
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Modal for expanded view */}
            {selectedReview && (
                <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4' onClick={() => setSelectedReview(null)}>
                    <div className='bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto p-6 shadow-2xl' onClick={e => e.stopPropagation()}>
                        <div>
                            <img 
                                src={reviews.find(r => r.id === selectedReview).image} 
                                alt={`Review from ${reviews.find(r => r.id === selectedReview).name}`}
                                className='w-full rounded-md'
                            />
                            <button 
                                className='mt-6 px-6 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors mx-auto block'
                                onClick={() => setSelectedReview(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Testimonials