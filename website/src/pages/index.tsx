import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import './home.scss'
import styles from './index.module.scss'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <h1 className='hero__title'>{siteConfig.title}</h1>
                <p className='hero__subtitle'>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        // className='button button--secondary button--lg'
                        className={clsx('button button--secondary button--lg', styles.button)}
                        to='/docs/intro'>
                        起步 →
                    </Link>
                    <Link
                        className={clsx('button button--secondary button--lg', styles.button)}
                        to='https://github.com/mankeung/mk-koa'>
                        下载源码 🚀
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    // const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`${''}`}
            description='Description will go into a meta tag in <head />'>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
            <main className='container'>
                <h2 className="mk-title">项目推荐</h2>
                <div className="mk-links">
                    <a rel="noopener noreferrer" className="mk-item" href="https://mankeung.github.io/docs/mk-data/" target="_blank" title="个人在线文档，前端学习记录。" >
                        <img src="docs.png" alt='' />
                        <h1>docs</h1>
                    </a>
                    <a rel="noopener noreferrer" className="mk-item" href="https://mankeung.github.io/docs/mview-ui/" target="_blank" title="mView UI uni-app框架，工作项目中常用组件和工具提高开发效率。">
                        <img src="mview.png" alt='' />
                        <h1>mView</h1>
                    </a>
                    <a rel="noopener noreferrer" className="mk-item" href="https://mankeung.github.io/docs/mk-vue/" target="_blank" title="Vue + TypeScript + Vite + ... 模板框架" >
                        <img src="vue.svg" alt='' />
                        <h1>mk-vue</h1>
                    </a>
                    <a rel="noopener noreferrer" className="mk-item" href="https://mankeung.github.io/docs/mk-react/" target="_blank" title="React + TypeScript + Vite + ... 模板框架" >
                        <img src="react.svg" alt='' />
                        <h1>mk-react</h1>
                    </a>
                </div>
            </main>
        </Layout>
    )
}
