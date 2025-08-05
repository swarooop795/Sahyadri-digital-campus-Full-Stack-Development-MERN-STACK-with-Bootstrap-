import React, { useState } from 'react';
import { Star, Send, MessageSquare } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && comment.trim() && studentName.trim()) {
      const feedback = {
        id: Date.now(),
        rating,
        comment: comment.trim(),
        date: new Date().toLocaleString(),
        studentName: studentName.trim(),
      };

      // In a real app, this would be sent to the backend
      console.log('Feedback submitted:', feedback);
      
      // Reset form
      setRating(0);
      setComment('');
      setStudentName('');
      alert('Thank you for your feedback! We appreciate your input.');
    }
  };

  const StarRating = () => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
            className="transition-colors"
          >
            <Star
              size={32}
              className={`${
                star <= (hoveredRating || rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              } hover:text-yellow-400`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <MessageSquare size={64} className="mx-auto text-orange-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Feedback</h1>
          <p className="text-gray-600">Help us improve our service by sharing your experience</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Rate Your Experience *
              </label>
              <div className="flex flex-col items-center space-y-2">
                <StarRating />
                <p className="text-sm text-gray-600">
                  {rating === 0 && 'Please select a rating'}
                  {rating === 1 && 'Poor - We can do better'}
                  {rating === 2 && 'Fair - Room for improvement'}
                  {rating === 3 && 'Good - Satisfactory experience'}
                  {rating === 4 && 'Very Good - Great experience'}
                  {rating === 5 && 'Excellent - Outstanding experience'}
                </p>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Your Comments *
              </label>
              <textarea
                id="comment"
                rows={6}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us about your experience, suggestions for improvement, or any compliments..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {comment.length}/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={rating === 0 || !comment.trim() || !studentName.trim()}
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Submit Feedback</span>
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Your Feedback Matters</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Helps us maintain high food quality standards</li>
            <li>• Enables us to improve our service efficiency</li>
            <li>• Guides us in menu planning and new item additions</li>
            <li>• Ensures we meet the needs of our campus community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;