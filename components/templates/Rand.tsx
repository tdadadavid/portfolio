// 'use client';

// import { Container } from '../layout/Container';
// import { NavBar } from '../ui/NavBar';
// import { FrequencyTag } from '../ui/blog/FrequencyTag';
// import { BlogCard } from '../ui/blog/BlogCard';
// import { useEffect, useState } from 'react';
// import { GridBackground } from '../other/GridBackground';

// interface BlogTemplateProps {
//     blogs: BlogInterface[];
// }

// const Rand = ({ blogs }: BlogTemplateProps) => {
//     const [filterTag, setFilterTag] = useState<string>('');
//     const [flattenedPosts, setFlattenedPosts] = useState<Array<{ year: string; post: BlogInterface }> | null>(null);

//     // Returns a set of each individual tag
//     const getAllTags = (source: BlogInterface[]) => {
//         const tags: string[] = [];
//         source.forEach(blog => {
//             blog.metadata.tags.forEach(tag => {
//                 tags.push(tag);
//             });
//         });
//         return tags;
//     };

//     // Returns a map containing how many times each tag occurs
//     const getTagFrequencyMap = (source: BlogInterface[]) => {
//         const tags = Array.from(getAllTags(source));
//         const frequencyMap: Record<string, number> = {};
//         for (const tag of tags) {
//             frequencyMap[tag] = (frequencyMap[tag] || 0) + 1;
//         }
//         return frequencyMap;
//     };

//     // Flattens posts into a sorted array with year labels
//     const flattenPosts = (source: BlogInterface[]) => {
//         const sorted = [...source].sort(
//             (a, b) => new Date(b.metadata.publishedOn).getTime() - new Date(a.metadata.publishedOn).getTime(),
//         );
//         return sorted.map(post => ({
//             year: post.metadata.year,
//             post,
//         }));
//     };

//     // Filter each post in the post groups by tag
//     const handleTagClick = (tag: string) => {
//         // Toggle-able based on whether the string is empty or not
//         const caseInsensitiveTag = tag.toLowerCase();
//         if (filterTag == '' || filterTag != caseInsensitiveTag) {
//             setFilterTag(caseInsensitiveTag);
//             const filtered = blogs.filter(post =>
//                 post.metadata.tags.some(t => t.toLowerCase() == caseInsensitiveTag),
//             );
//             setFlattenedPosts(flattenPosts(filtered));
//         } else {
//             setFilterTag('');
//             setFlattenedPosts(flattenPosts(blogs));
//         }
//     };

//     const tags = getTagFrequencyMap(blogs);

//     // Effects
//     useEffect(() => {
//         setFlattenedPosts(flattenPosts(blogs));
//     }, []);

//     // Track when a year label has already been shown
//     const yearDisplayed: Record<string, boolean> = {};

//     return (
//         <Container>
//             <NavBar currentPage="blog" />
//             <GridBackground>
//                 <div className="overflow-x-hidden">
//                     {/* Frequency tags */}
//                     <section className="mb-12">
//                         <h3 className="text-3xl">Frequent</h3>
//                         <section className="my-4 flex flex-wrap gap-2 items-center overflow-x-auto max-w-full">
//                             {Object.entries(tags)
//                                 .sort(([, a], [, b]) => b - a) // sort by frequency count
//                                 .map(([tag, count], idx) => (
//                                     <FrequencyTag
//                                         key={idx}
//                                         title={`${tag} (${count})`}
//                                         isSelected={filterTag.toLowerCase() === tag.toLowerCase()}
//                                         onClick={() => handleTagClick(tag)}
//                                     />
//                                 ))}
//                         </section>
//                     </section>

//                     {/* Blog cards grid */}
//                     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {flattenedPosts?.map(({ year, post }, idx) => {
//                             let showYear = false;
//                             if (!yearDisplayed[year]) {
//                                 showYear = true;
//                                 yearDisplayed[year] = true;
//                             }

//                             return (
//                                 <div key={idx} className="col-span-1 space-y-1">
//                                     {showYear && (
//                                         <h3 className="text-lg font-bold text-ice">{year}</h3>
//                                     )}
//                                     <BlogCard meta={post.metadata} />
//                                 </div>
//                             );
//                         })}
//                     </section>
//                 </div>
//             </GridBackground>
//         </Container>
//     );
// };

// export default BlogTemplate;
