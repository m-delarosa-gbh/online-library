import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pages } from "./Pages.entity";

@Entity()
export class Formats {
    @PrimaryGeneratedColumn()
    format_id: number;

    @Column()
    format: string;

    @OneToMany(() => Pages, (pages) => pages.format)
    pages: Pages;
}