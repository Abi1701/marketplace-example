import React from "react";
import styled from "./newSupplier.module.scss";

export default function NewSupplier() {
	return (
		<div className={styled.newSupplier}>
			<div className={styled.newSupplierContainer}>
				<div className={styled.inputSupplier}>
					<h1 className={styled.newSupplierTittle}>Tambah Supplier</h1>
					<div className={styled.inputSupplierContainer}>
						<h1 className={styled.inputSupplierTittle}>Nama Supplier</h1>
						<input type="text" name="" id="" placeholder="Nama Supplier" />
					</div>
					<div className={styled.inputSupplierContainer}>
						<h1 className={styled.inputSupplierTittle}>Stock Supplier</h1>
						<input type="text" name="" id="" placeholder="Stock Supplier" />
					</div>
					<div className={styled.inputSupplierContainer}>
						<h1 className={styled.inputSupplierTittle}>Supplier Supplier</h1>
						<input type="text" name="" id="" placeholder="Supplier Supplier" />
					</div>
					<div className={styled.buttonSection}>
						<a className={styled.submitButton} href="/">
							Kembali
						</a>
						<button className={styled.submitButton} type="submit">
							Tambah Supplier
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
