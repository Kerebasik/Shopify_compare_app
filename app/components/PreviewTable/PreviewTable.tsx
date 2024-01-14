type PreviewTableProps = {
  backColor: string;
  textColor: string;
  attributesGroupBackColor: string;
  attributesGroupTextColor: string;
  attributesBackColor: string;
  attributesTextColor: string;
  topbarTextColor: string;
  topbarBackColor: string;
};

const PreviewTable = ({
  backColor,
  textColor,
  attributesGroupBackColor,
  topbarBackColor,
  topbarTextColor,
  attributesGroupTextColor,
  attributesBackColor,
  attributesTextColor,
}: PreviewTableProps) => {
  return (
    <>
      <div
        style={{
          width: "515px",
          height: "430px",
          borderRadius: "22px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.38)",
          padding: "20px",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            right: "7px",
            top: "5px",
            width: "20px",
            height: "20px",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
            color: `${topbarTextColor}`,
            alignItems: "center",
            borderRadius: "50%",
            borderColor: `${topbarBackColor}`,
            boxShadow: `${topbarBackColor} 2px 2px 0px 0px`,
          }}
        >
          X
        </button>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "rgba(204, 204, 204, 1)",
          }}
        >
          <table
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr
                style={{
                  height: "200px",
                }}
              >
                <th
                  style={{
                    backgroundColor: `${attributesGroupBackColor}`,
                    borderRadius: "10px 0 0 0",
                    borderRight: "1px solid",
                    borderBottom: "1px solid",
                    color: `${attributesGroupTextColor}`,
                    borderColor: "rgba(204, 204, 204, 1)",
                  }}
                >
                  Products
                </th>
                <th
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                    borderRadius: "0 10px 0 0",
                    backgroundColor: `${backColor}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        fontSize: "18px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Product Icon
                    </div>
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "#ffffff",
                        color: `${attributesTextColor}`,
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "14px",
                        width: "97px",
                        height: "33px",
                        border: `2px solid ${attributesBackColor}`,
                        boxShadow: `${attributesBackColor} 4px 4px 0 0`,
                        borderRadius: "10px",
                      }}
                    >
                      Add to cart
                    </div>
                    <div>Learn more</div>
                  </div>
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    borderRight: "1px solid",
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                    color: `${attributesGroupTextColor}`,
                    backgroundColor: `${attributesGroupBackColor}`,
                  }}
                >
                  Variant Title
                </th>
                <td
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                    backgroundColor: `${backColor}`,
                    color: `${textColor}`,
                  }}
                >
                  <p style={{ textAlign: "center" }}>Default Title</p>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    backgroundColor: `${attributesGroupBackColor}`,
                    color: `${attributesGroupTextColor}`,
                    borderRight: "1px solid",
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                  }}
                >
                  Price
                </th>
                <td
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                    backgroundColor: `${backColor}`,
                    color: `${textColor}`,
                  }}
                >
                  <p style={{ textAlign: "center" }}>₴,600.00 UAH</p>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    backgroundColor: `${attributesGroupBackColor}`,
                    color: `${attributesGroupTextColor}`,
                    borderRight: "1px solid",
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                  }}
                >
                  Vendor
                </th>
                <td
                  style={{
                    borderBottom: "1px solid",
                    borderColor: "rgba(204, 204, 204, 1)",
                    backgroundColor: `${backColor}`,
                    color: `${textColor}`,
                  }}
                >
                  <p style={{ textAlign: "center" }}>Hydrogen Vendor</p>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    backgroundColor: `${attributesGroupBackColor}`,
                    color: `${attributesGroupTextColor}`,
                    borderRight: "1px solid",
                    borderRadius: "0 0 0 10px",
                    borderColor: "rgba(204, 204, 204, 1)",
                  }}
                >
                  Available
                </th>
                <td
                  style={{
                    backgroundColor: `${backColor}`,
                    color: `${textColor}`,
                    borderRadius: "0 0 10px 0",
                  }}
                >
                  <p style={{ textAlign: "center" }}>true</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { PreviewTable };
