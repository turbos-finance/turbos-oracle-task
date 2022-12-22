import {
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('trades')
export class TradesEntity {
  @PrimaryColumn({ name: 'tx_digest' })
  txDigest: string;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @Column({ name: "token_in_amount" })
  tokenInAmount: string;

  @Column({ name: "token_in_pool_id" })
  tokenInPoolId: string;

  @Column({ name: "token_in_symbol" })
  tokenInSymbol: string;

  @Column({ name: "token_out_amount" })
  tokenOutAmount: string;

  @Column({ name: "token_out_pool_id" })
  tokenOutPoolId: string;

  @Column({ name: "token_out_symbol" })
  tokenOutSymbol: string;

  @Column()
  type: string;

  @Column({ name: "package_id" })
  packageId: string;

  @Column({ type: 'bigint' })
  timestamp: number;
}
