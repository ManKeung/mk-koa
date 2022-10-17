/*
 * @Description: rollup配置
 * @Author: Mankeung
 * @Date: 2022-10-14 13:14:46
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-15 17:01:36
 */

import { RollupOptions } from 'rollup'
import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import eslint from 'rollup-plugin-eslint2'
import cleanup from 'rollup-plugin-cleanup'
import clear from 'rollup-plugin-clear'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const config: RollupOptions = {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        banner: '#!/usr/bin/env node',
        format: 'cjs'
    },
    onwarn: (warning, warn) => {
        if (warning.code === 'EVAL') return ''
        warn(warning)
    },
    plugins: [
        clear({ targets: ['dist'], watch: false }), // 清除上一次的构建dist目录
        eslint({
            include: ['src/**']
        }),
        nodeResolve({
            preferBuiltins: true
        }),
        commonjs(),
        typescript(),
        terser(),
        cleanup(),
        json(),
        copy({
            targets: [
                {
                    src: 'public/*',
                    dest: 'dist/public'
                },
                {
                    src: './package.json',
                    dest: 'dist'
                },
                {
                    src: './pm2.json',
                    dest: 'dist'
                },
            ]
        })
    ]
}

export default config
