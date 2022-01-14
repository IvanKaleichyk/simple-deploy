export default class NoteTile {
  readonly id: number
  readonly _title: string
  readonly body: string
  readonly name: string
  readonly isPrivate: boolean

  constructor (id: number, title: string, body: string, name: string, isPrivate: boolean) {
    this.id = id
    this._title = title
    this.body = body
    this.name = name
    this.isPrivate = isPrivate
  }
}
