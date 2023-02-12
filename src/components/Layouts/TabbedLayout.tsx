import React, {useState} from 'react';
import "./TabbedLayout.css"
import {Tab} from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const TabbedLayout = (props: {
    size: string,
    vertical: boolean //TODO used for arow key functionality, need to create new style for vertical too for tabs/pages
}) => {
    const {
        size,
        vertical
    } = props

    const [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <div className="melody-w-full melody-max-w-md melody-px-2 melody-py-16 sm:melody-px-0">
            <Tab.Group vertical={vertical}>
                <Tab.List className="melody-flex melody-space-x-1 melody-rounded-xl melody-bg-blue-500/20 melody-p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'melody-w-full melody-rounded-lg melody-py-2.5 melody-text-sm melody-font-medium melody-leading-5 melody-text-blue-700',
                                    'melody-ring-white melody-ring-opacity-60 melody-ring-offset-2 melody-ring-offset-blue-400 focus:melody-outline-none focus:melody-ring-2',
                                    selected
                                        ? 'melody-bg-white melody-shadow'
                                        : 'melody-text-blue-100 hover:melody-bg-white/[0.12] hover:melody-text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="melody-mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'melody-rounded-xl melody-bg-white melody-p-3',
                                'melody-ring-white melody-melody-ring-opacity-60 melody-melody-ring-offset-2 melody-melody-ring-offset-blue-400 focus:melody-melody-outline-none focus:melody-melody-ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="melody-relative melody-rounded-md melody-p-3 hover:melody-bg-gray-100"
                                    >
                                        <h3 className="melody-text-sm melody-font-medium melody-leading-5">
                                            {post.title}
                                        </h3>

                                        <ul className="melody-mt-1 melody-flex melody-space-x-1 melody-text-xs melody-font-normal melody-leading-4 melody-text-gray-500">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a href="#"
                                           className={classNames(
                                               'melody-absolute melody-inset-0 melody-rounded-md',
                                               'melody-ring-blue-400 focus:melody-z-10 focus:melody-outline-none focus:melody-ring-2'
                                           )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}