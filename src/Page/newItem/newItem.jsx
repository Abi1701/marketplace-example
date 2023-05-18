import React from "react";
import styled from "./newItem.module.scss";

export default function NewItem() {
	return (
		<div className={styled.newItem}>
			<div className={styled.newItemContainer}>
				<div className={styled.inputItem}>
					<h1 className={styled.newItemTittle}>Tambah Barang</h1>
					<div className={styled.inputItemContainer}>
						<h1 className={styled.inputItemTittle}>Nama Barang</h1>
						<input type="text" name="" id="" placeholder="Nama Barang" />
					</div>
					<div className={styled.inputItemContainer}>
						<h1 className={styled.inputItemTittle}>Harga Barang</h1>
						<input type="text" name="" id="" placeholder="Harga Barang" />
					</div>
					<div className={styled.inputItemContainer}>
						<h1 className={styled.inputItemTittle}>Stock Barang</h1>
						<input type="text" name="" id="" placeholder="Stock Barang" />
					</div>
					<div className={styled.inputItemContainer}>
						<h1 className={styled.inputItemTittle}>Supplier Barang</h1>
						<input type="text" name="" id="" placeholder="Supplier Barang" />
					</div>
					<div className={styled.buttonSection}>
						<a className={styled.submitButton} href="/">
							Kembali
						</a>
						<button className={styled.submitButton} type="submit">
							Tambah Barang
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
