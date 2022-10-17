import Code from '@/config/code'

declare global {
	interface Result {
		code: Code
		message: string
		bean: unknown
	}
}
