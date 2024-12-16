import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name : 'posts',
})

@Index('IDX_POST_TITLE' , ['title']) // title에 대한 인덱스 이름 지정
@Index('IDX_POST_AUTHOR_ID' ,  ['authorId']) // title에 대한 인덱스 이름 지정
@Index('IDX_POST_TITLE_AUTHOR_ID' ,  ['title' , 'authorId'] , {unique : true}) // title에 대한 인덱스 이름 지정
export class Post {
  @PrimaryGeneratedColumn({
    type : 'int',
  })
  id: number;

  @Column({
    type : 'varchar' ,
    length : 255,
    nullable : false,
  })
  title: string;
  @Column({
    type : 'text',
    nullable : false
  })
  content: string;

  @Column({
    type : 'int',
    name :  'author_id',
    nullable : false
  })
  authorId: number;
}

