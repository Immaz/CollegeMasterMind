$(document).ready(function () {
  $(".filter").click(function () {
    $(".filter").each(function () {
      $(this).removeClass("filter-active");
      var filter_name = $(this).attr("data-filter");
      $(`${filter_name}`).hide();
    });
    if ($(this).attr("data-filter") == "all") {
      $(".filter").each(function () {
        $(this).removeClass("filter-active");
        var filter_name = $(this).attr("data-filter");
        $(`${filter_name}`).show();
      });
    } else {
      $($(this).attr("data-filter")).show();
    }
    $(this).addClass("filter-active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(
    ".accordion-section-header"
  );

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentContent = header.nextElementSibling;
      const isContentVisible = currentContent.style.display === "block";

      // Hide all sections first
      accordionHeaders.forEach((header) => {
        header.nextElementSibling.style.display = "none";
      });

      // Show content of the clicked section
      if (!isContentVisible) {
        currentContent.style.display = "block";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table");

  if (table) {
    let hoverOverlay = null;

    table.addEventListener("mouseover", function (e) {
      const targetTagName = e.target.tagName;

      if (targetTagName === "TH" || targetTagName === "TD") {
        const columnIndex = e.target.cellIndex;

        if (columnIndex > 0) {
          if (!hoverOverlay) {
            hoverOverlay = document.createElement("div");
            hoverOverlay.classList.add("hover-overlay");
            document.body.appendChild(hoverOverlay);
          }

          const tableRect = table.getBoundingClientRect();
          const columnRect = e.target.getBoundingClientRect();

          // Calculate dimensions and position of the hover overlay
          const overlayTop = tableRect.top;
          const overlayLeft = columnRect.left;
          const overlayWidth = columnRect.width;
          const overlayHeight = tableRect.height;

          // Set hover overlay styles
          hoverOverlay.style.top = `${overlayTop}px`;
          hoverOverlay.style.left = `${overlayLeft}px`;
          hoverOverlay.style.width = `${overlayWidth}px`;
          hoverOverlay.style.height = `${overlayHeight}px`;
          hoverOverlay.style.backgroundColor = "#2e8ea4"; // Set hover overlay color

          // Highlight column cells and adjust styles
          const cellsAndHeaders = table.querySelectorAll(
            `tbody tr td:nth-child(${columnIndex + 1}):not(:first-child),
             thead th:nth-child(${columnIndex + 1}):not(:first-child)`
          );

          cellsAndHeaders.forEach((cellOrHeader) => {
            cellOrHeader.classList.add("column-hovered");

            const heading = cellOrHeader.querySelector(".heading");
            if (heading) {
              heading.style.color = "white"; // Change heading text color to white
            }

            const amount = cellOrHeader.querySelector(".amount");
            if (amount) {
              amount.style.color = "white"; // Change amount text color to white
            }

            const icon = cellOrHeader.querySelector("svg");
            if (icon) {
              const path = icon.querySelector("path");
              if (path) {
                path.style.fill = "white"; // Change SVG icon fill color to white
              }
            }
          });

          // Bring hover overlay to front
          hoverOverlay.style.zIndex = "2"; // Set a higher z-index than the tbody
        }
      }
    });

    table.addEventListener("mouseout", function () {
      if (hoverOverlay) {
        hoverOverlay.remove();
        hoverOverlay = null;
      }

      // Reset styles for all column cells and headers
      const cellsAndHeaders = table.querySelectorAll(
        "td.column-hovered, th.column-hovered"
      );

      cellsAndHeaders.forEach((cellOrHeader) => {
        cellOrHeader.classList.remove("column-hovered");

        const heading = cellOrHeader.querySelector(".heading");
        if (heading) {
          heading.style.color = ""; // Reset heading text color
        }

        const amount = cellOrHeader.querySelector(".amount");
        if (amount) {
          amount.style.color = ""; // Reset amount text color
        }

        const icon = cellOrHeader.querySelector("svg");
        if (icon) {
          const path = icon.querySelector("path");
          if (path) {
            path.style.fill = ""; // Reset SVG icon fill color
          }
        }
      });
    });
  }
});

// Function to add rounded corner border to table <tbody>
function addRoundedBorderToTable() {
  const tbody = document.querySelector("#data-table tbody");

  if (tbody) {
    // Apply CSS styles to add rounded corner border
    tbody.style.border = "6px solid #4f8796"; // Border style
    tbody.style.borderRadius = "10px"; // Rounded corners
    tbody.style.overflow = "hidden"; // Hide content outside the rounded corners
    tbody.style.display = "block"; // Ensure display is block-level

    // Ensure that the hover overlay has a higher z-index
    const hoverOverlay = document.querySelector(".hover-overlay");
    if (hoverOverlay) {
      hoverOverlay.style.zIndex = "3"; // Set a higher z-index than the tbody and below the overlay
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addRoundedBorderToTable();
});
