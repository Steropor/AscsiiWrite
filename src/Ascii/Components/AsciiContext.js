import React from "react";

const AsciiSelect = React.createContext({
  SelectedAsciiName: [
    " #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ###     #         #      ##     #    #   #  #    #                               #                               #  ### ### # # ### ### ### ### ### ###           #         #    #  ### # #  ## # #  #   #    # #    #    #   # #            ## ##   ## ##    # ###               # # #     ",
    "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #  ## ### ### ### ###  #  ### ###         # #  #  ### ##  ### ### ### ###  ## ### # # # # # # # # # # ##      ##    #   # # # #   #     # # # # # # #     ###   #      #   #   #  # # ### ##    # # # #    #   #   #    #  #   #           #   #   #   #  ###   #  #   #       #  # #     ",
    "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #  # # # # #   # # ##  ### # # # #  #   #  ##   #  ### # # # # # # # # #    #   #  # # # # ###  #  ###  #       #  ###  ## ### ### ###   # ### ### # # ###      #  ### ###   #  #  #   # # ###  #       ##  #   #   #   #  #     #          #   #  ##   ## #    ##             #           ",
    "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #   ### ### ### ### ###  #   ## # #  ##  #  # #  ## # # # # ### ### ### #   ##   ## ###  #  ### # #   #  ##      #  #     #   #   # # #   # # #   # # #     ### #        #          ### ###  ## #       # #  #   #   #  #    #   #       #   #   #   #   #           #   #                  ",
    "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###                     ##  ###         #                       #     #                             ###         ### ### ###   # ### ###   # ### ### ###         #                #      # # ##  # #     ###   # #    #  #     # #    #  #    ## ##   ## ##       #  #       ###             ",
  ],
  SelectedAsciiWidthOfLetter: 4,
  SelectedAsciiHeightOfLetter: 5,
});

const AsciiList = React.createContext(null);

export { AsciiSelect, AsciiList };