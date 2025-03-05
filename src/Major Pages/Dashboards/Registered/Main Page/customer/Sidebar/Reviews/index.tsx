import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from "../../../../Elements/ui/combined-ui";
import { Sidebar } from "../../../../Elements/sidebar-customer";
import CombinedLayout from "../../../../Elements/combined-layout";

const Reviews = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [reviews, setReviews] = useState([
    { name: "Alice Johnson", rating: 5, message: "Amazing service! Highly recommend." },
    { name: "Mark Evans", rating: 4, message: "Good experience, but room for improvement." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, message: "" });

  const handleReviewSubmit = () => {
    if (newReview.name && newReview.message) {
      setReviews([newReview, ...reviews]);
      setNewReview({ name: "", rating: 5, message: "" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Dynamic margin based on sidebar state */}
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <CombinedLayout showWelcomeBanner={false}>
          <div className="container px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Customer Reviews
            </h1>

            {/* Review Form */}
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Leave a Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
                  />
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rating (1-5)"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={newReview.message}
                    onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
                  />
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 w-full transition-all"
                    onClick={handleReviewSubmit}
                  >
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <div className="space-y-6 mt-6">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        {review.name} - <span className="text-yellow-400">{"⭐".repeat(review.rating)}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">{review.message}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-center">No reviews yet. Be the first to review!</p>
              )}
            </div>
          </div>
        </CombinedLayout>
      </div>
    </div>
  );
};

export default Reviews;
