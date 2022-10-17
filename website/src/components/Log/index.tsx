import React from 'react'
import './index.scss'

export default () => {
    const list = [
        {
            title: '1.0.0',
            time: '2022-10-17',
            data: [
                {
                    head: {
                        title: 'v1.0.0',
                        type: 'add'
                    },
                    desc: 'vite + react + ts 项目基础搭建v1.0.0发布。'
                }
            ]
        }
    ]

    return (
        list.map((item, index) => (
            <div className="page-log" key={index}>
                <p className="page-log--title">{item.title}</p>
                <p className="page-log--time">{item.time}</p>
                <ul className="page-log--box">
                    {
                        item.data.map((it, i) => (
                            <li key={i}>
                                {it.head ? <span className={it.head.type}>{it.head.title}</span> : <p dangerouslySetInnerHTML={{ __html: it.desc}}></p>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        ))
    )
}
