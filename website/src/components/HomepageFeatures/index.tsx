import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

type FeatureItem = {
    title: string
    Svg?: React.ComponentType<React.ComponentProps<'svg'>> | ''
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: '📦持续集成',
        Svg: '',
        description: (
            <>
                持续集成项目开发过程中基础配置，不断更新。
            </>
        )
    },
    {
        title: '⚡️快速开发',
        Svg: '',
        description: (
            <>
                配置项目基础模板，快速搭建项目快速开发。
            </>
        )
    },
    {
        title: '👌简单易懂',
        Svg: '',
        description: (
            <>
                文档会详细介绍项目搭建过程，便于读者理解。
            </>
        )
    }
]

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {Svg && (<div className='text--center'>
                <Svg className={styles.featureSvg} role='img' />
            </div>)}
            <div className='padding-horiz--md'>
                <h3 className='text--center '>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
