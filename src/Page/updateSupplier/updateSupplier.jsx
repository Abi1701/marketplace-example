import React from "react";
import styled from "./updateSupplier.module.scss";

export default function UpdateSupplier() {
	return (
		<div className={styled.updateSupplier}>
			<div className={styled.updateSupplierContainer}>
				<div className={styled.inputSupplier}>
					<h1 className={styled.updateSupplierTittle}>Update Supplier</h1>
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
							Update Supplier
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
