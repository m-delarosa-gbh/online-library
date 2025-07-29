import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Authors {
    @PrimaryGeneratedColumn()
    author_id: number;

    @Column()
    name: string;
}