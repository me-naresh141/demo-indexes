// Q2. Create an article Schema with fields
// title
// description
// tagsString
// Add multikey indexes on tags which is an array of strings
// Add text indexes on title as users will search for texts present in an article's title.
// Update text indexes to include descriptions as well. Implement text indexes on both title and description.

let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

articleSchema.index({ tags: 1 })
articleSchema.index({ title: 'text' });
articleSchema.index({ title: "text", description :"text"});
module.exports = mongoose.model("Article", articleSchema);
